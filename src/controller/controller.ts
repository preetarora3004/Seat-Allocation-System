import { Request, Response } from "express";
import { Service } from "../service/service";

const service = new Service();

export class Controller {
    public async checkAvailablity(req: Request, res: Response) {
        const seatName = req.params.seatName;

        if (!seatName) {
            throw new Error("Invalid input");
        }

        const isAvailable = service.checkSeatAvailablity(seatName as string);

        if (isAvailable) {
            return res.json({
                success: true,
                data: {
                    available: true,
                    seatName: seatName,
                },
            });
        }

        return res.json({
            success: false,
            data: {
                available: false,
                seatName: seatName,
            },
        });
    }

    public async bookSeat(req: Request, res: Response) {
        const seatName = req.params.seatName;

        if (!seatName) {
            throw new Error("Invalid input");
        }

        const isBooked = service.booking(seatName as string);

        if (isBooked) {
            return res.json({
                success: true,
                data: {
                    seatName: seatName,
                },
            }).status(200);
        }

        return res.json({
            success: false,
            data: {
                seatName: seatName,
            },
        }).status(403);
    }

    public async bookReservation(req: Request, res: Response) {
        const seatName = req.params.seatName

        if (!seatName) {
            throw new Error("Invalid input");
        }

        const isReserved = service.addReservation(seatName as string, "add-reservation");

        if (isReserved) {
            return res.json({
                success: true,
                data: {
                    seatName: seatName,
                },
            }).status(200);
        }

        return res.json({
            success: false,
            data: {
                seatName: seatName,
            },
        }).status(403);
    }
}
