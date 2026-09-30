const TOTAL_REQUESTS = 10;

type BookingResponse = {
    success: boolean;
    body: {
        success: boolean;
    };
};

async function testRaceCondition() {
    const requests = Array.from({ length: TOTAL_REQUESTS }, (_, i) =>
        fetch("http://localhost:3000/api/v1/book-seat/CA", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }),
    );

    const responses = await Promise.all(requests);

    const results = await Promise.all(
        responses.map(async (response) => ({
            status: response.status,
            body: (await response.json()) as BookingResponse,
        })),
    );

    const successful = results.filter((result) => result.body.success === true);

    console.log("Total requests:", TOTAL_REQUESTS);
    console.log("Successful bookings:", successful.length);
}

testRaceCondition();
