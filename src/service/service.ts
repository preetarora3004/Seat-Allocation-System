import { processReservations } from "../utility/utility";
import { Repository } from "../repository/repository";

export class Service {
    private repo = new Repository();

    public checkSeatAvailablity(seatName: string) {
        const name = seatName.toUpperCase();

        const [i, j] = name.trim().split("");
        const isReserved = Repository.reservation.get(name);

        if (!i || !j) {
            return false;
        }

        if (
            !Repository.seats[i.charCodeAt(0) - 65]![j.charCodeAt(0) - 65]?.booked &&
            !isReserved
        ) {
            return true;
        }

        return false;
    }

    public booking(seatName: string) {
        const isSuccessfull = this.transaction(seatName, "booking");

        if (isSuccessfull) {
            return true;
        }

        return false;
    }

    private transaction(seatName: string, action: string) {
        if (Repository.mapRequest.has(seatName)) {
            return false;
        }

        Repository.mapRequest.set(seatName, action);

        if (action === "booking") {
            const [i, j] = seatName.trim().split("");

            if (!i || !j) {
                return false;
            }

            const seat =
                Repository.seats[i?.charCodeAt(0) - 65]![j?.charCodeAt(0) - 65];

            const reserved = Repository.reservation.get(seatName);

            if (!seat || seat.booked || reserved) {
                return false;
            }

            seat.booked = true;
            console.log("Booked");

            return true;
        }
    }

    public addReservation(seatName: string, action: string) {
        if (Repository.mapRequest.has(seatName)) {
            return false;
        }

        Repository.mapRequest.set(seatName, action);

        if (action === "add-reservation") {
            Repository.reservation.set(seatName, true);
            Repository.reservationQueue.enqueue({
                seatName: seatName,
                ttl: new Date(Date.now() + 5 * 60 * 1000),
            });

            processReservations();

            return true;
        }

        return false;
    }
}
