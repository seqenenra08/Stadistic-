"use client";

import { contextData } from "../context/contextData";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import { useState, useContext, useMemo } from "react";

export default function TableData() {
  const { data, cambioData } = useContext(contextData);
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;

  const pages = Math.ceil(data.length / rowsPerPage);
  console.log(data);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);

  return (
    <Table
      aria-label="Example table with client side pagination"
      className="bg-zinc-950 w-3/6 mt-12"
      bottomContent={
        <div className="flex w-full justify-center text-white bg-black">
          <Pagination
            variant="bordered"
            isCompact
            showControls
            showShadow
            page={page}
            total={pages}
            onChange={(page) => setPage(page)} 
          />
        </div>
      }
    >
      <TableHeader>
        {Object.keys(data[0]).map((e, indice) => (
          <TableColumn className="text-zinc-100 border-2 border-zinc-900" key={indice}>
            {e}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.date}>
            {Object.values(item).map((columnKey) => (
              <TableCell className="text-center text-zinc-100 border-2 border-zinc-900">{columnKey}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
