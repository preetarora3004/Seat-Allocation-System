import { Repository } from "../repository/repository";

export function processReservations() {
    console.log("processing reservation");
    const reservation = Repository.reservationQueue.front();

    if (!reservation) return;

    const delay = reservation.ttl.getTime() - Date.now();

    setTimeout(
        () => {
            Repository.reservationQueue.dequeue();

            Repository.reservation.delete(reservation.seatName);

            console.log("Removed reservation");

            processReservations();
        },
        Math.max(0, delay),
    );
}
