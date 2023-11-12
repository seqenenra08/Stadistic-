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
  const [dataKey, setDataKey] = useState([]);
  const [valueSelect, setValueSelectec] = useState("ninguno");
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;

  const pages = Math.ceil(data.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    setDataKey(Object.keys(data[0]));
    return data.slice(start, end);
  }, [page, data]);

  const numberverification = (keySelected) => {
    if (typeof data[0][keySelected] == "number") {
      console.log("True");
    } else {
      console.log("False");
    }
  };

  return (
    <div className="w-full flex justify-center flex-col">
      <Table
        aria-label="Example table with client side pagination"
        className="bg-zinc-950 mt-12"
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
            <TableColumn
              className="text-zinc-100 border-2 border-zinc-900"
              key={indice}
            >
              {e}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.date}>
              {Object.values(item).map((columnKey) => (
                <TableCell
                  key={columnKey}
                  className="text-center text-zinc-100 border-2 border-zinc-900"
                >
                  {columnKey}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <form className="w-full flex justify-center mt-2">
        <label htmlFor="favoriteOnly" className="text-white">
          Selecciona el dato numérico:{" "}
        </label>
        <select
          name="favoriteOnly"
          id="favoriteOnly"
          className="rounded ml-2"
          value={valueSelect}
          onChange={(e) => {setValueSelectec(e.target.value), numberverification(e.target.value)}}
        >
          {dataKey.map((e) => (
            <option>{e}</option>
          ))}
        </select>
        <button className="bg-white ml-11 w-20 rounded">Cargar</button>
      </form>
    </div>
  );
}
