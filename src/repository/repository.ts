import { MinPriorityQueue } from "@datastructures-js/priority-queue";

interface Reservation {
    seatName: string;
    ttl: Date;
}

export class Repository {
    public static seats: Array<{ seatName: string; booked: boolean }[]>;
    public static reservation: Map<string, boolean>;
    public static mapRequest: Map<string, string>;
    public static reservationQueue: MinPriorityQueue<Reservation>;

    constructor() {
        Repository.mapRequest = new Map();
        Repository.reservationQueue = new MinPriorityQueue<Reservation>(
            (reservation) => reservation.ttl.getTime(),
        );
        Repository.reservation = new Map();
        Repository.seats = [
            [
                { seatName: "AA", booked: false },
                { seatName: "AB", booked: true },
                { seatName: "AC", booked: false },
                { seatName: "AD", booked: false },
                { seatName: "AE", booked: false },
            ],
            [
                { seatName: "BA", booked: false },
                { seatName: "BB", booked: false },
                { seatName: "BC", booked: false },
                { seatName: "BD", booked: false },
                { seatName: "BE", booked: false },
            ],
            [
                { seatName: "CA", booked: false },
                { seatName: "CB", booked: false },
                { seatName: "CC", booked: false },
                { seatName: "CD", booked: false },
                { seatName: "CE", booked: false },
            ],
            [
                { seatName: "DA", booked: false },
                { seatName: "DB", booked: false },
                { seatName: "DC", booked: false },
                { seatName: "DD", booked: false },
                { seatName: "DE", booked: false },
            ],
            [
                { seatName: "EA", booked: false },
                { seatName: "EB", booked: false },
                { seatName: "EC", booked: false },
                { seatName: "ED", booked: false },
                { seatName: "EE", booked: false },
            ],
            [
                { seatName: "FA", booked: false },
                { seatName: "FB", booked: false },
                { seatName: "FC", booked: false },
                { seatName: "FD", booked: false },
                { seatName: "FE", booked: false },
            ],
            [
                { seatName: "GA", booked: false },
                { seatName: "GB", booked: false },
                { seatName: "GC", booked: false },
                { seatName: "GD", booked: false },
                { seatName: "GE", booked: false },
            ],
            [
                { seatName: "HA", booked: false },
                { seatName: "HB", booked: false },
                { seatName: "HC", booked: false },
                { seatName: "HD", booked: false },
                { seatName: "HE", booked: false },
            ],
            [
                { seatName: "IA", booked: false },
                { seatName: "IB", booked: false },
                { seatName: "IC", booked: false },
                { seatName: "ID", booked: false },
                { seatName: "IE", booked: false },
            ],
            [
                { seatName: "JA", booked: false },
                { seatName: "JB", booked: false },
                { seatName: "JC", booked: false },
                { seatName: "JD", booked: false },
                { seatName: "JE", booked: false },
            ],
            [
                { seatName: "KA", booked: false },
                { seatName: "KB", booked: false },
                { seatName: "KC", booked: false },
                { seatName: "KD", booked: false },
                { seatName: "KE", booked: false },
            ],
            [
                { seatName: "LA", booked: false },
                { seatName: "LB", booked: false },
                { seatName: "LC", booked: false },
                { seatName: "LD", booked: false },
                { seatName: "LE", booked: false },
            ],
            [
                { seatName: "MA", booked: false },
                { seatName: "MB", booked: false },
                { seatName: "MC", booked: false },
                { seatName: "MD", booked: false },
                { seatName: "ME", booked: false },
            ],
        ];
    }
}
