import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const page: number = Number(req.query.page) || 1;
                const pageSize: number = Number(req.query.pageSize) || 10;

                const mark = await prisma.mark.findMany({
                    // skip: (page - 1) * pageSize,
                    // take: pageSize,
                });

                const totalmark = await prisma.mark.count();
                const totalPage: number = Math.ceil(totalmark / pageSize);
                res.status(200).json({ mark });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the mark" });
            }
            break;

        case 'POST':
            try {
                const newmark = await prisma.mark.create({
                    data: req.body,
                });

                res.status(201).json(newmark);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the mark" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}