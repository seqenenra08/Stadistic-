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
  const [buttonDisable, setButtonDisable] = useState(false);
  const [average, setAverage] = useState(0);
  const [median, setMedian] = useState(0);
  const [variance, setVariance] = useState(0);
  const [desviation, setDesviation] = useState(0);
  const [valueSelect, setValueSelectec] = useState();
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
    setValueSelectec(keySelected);
    if (typeof data[0][keySelected] == "number") {
      setButtonDisable(true);
    } else {
      setAverage(0)
      setDesviation(0)
      setMedian(0)
      setVariance(0)
      setButtonDisable(false);
    }
  };

  const handleAverage = (dataKey) => {
    let result = 0;
    data.map((e) => {
      result = result + e[dataKey];
    });
    result = result / data.length;
    setAverage(result);
    return result;
  };

  const handleMedian = (dataKey) => {
    if (data.length % 2 == 0) {
      let position1 = data.length / 2;
      let position2 = data.length / 2 + 1;
      let value =
        (data[position1 - 1][dataKey] + data[position2 - 1][dataKey]) / 2;
      setMedian(value);
    } else {
      let position = (data.length + 1) / 2;
      setMedian(data[position - 1][dataKey]);
    }
  };

  const handleVariance = (dataKey, average) => {
    let sum = 0;
    data.map((e) => {
      sum = sum + Math.pow(e[dataKey] - average, 2);
    });
    let result = sum / (data.length - 1);
    setVariance(result);
    return result;
  };

  const handleDesviation = (variance) => {
    let result = Math.sqrt(variance);
    setDesviation(result);
  };

  const handleValue = (dataKey) => {
    let averageResult = handleAverage(dataKey);
    handleMedian(dataKey);
    let varianceResult = handleVariance(dataKey, averageResult);
    handleDesviation(varianceResult);
  };

  return (
    <div className="w-full flex justify-center flex-col">
      <Table
        aria-label="Example table with client side pagination"
        className="bg-zinc-950 mt-8"
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
      <div className="flex flex-row">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 mb-4 w-1/3 border-zinc-900 bg-zinc-900 flex justify-center ml-8 rounded-sm py-1.5"
        >
          <label htmlFor="favoriteOnly" className="text-white">
            Selecciona el dato numérico:{" "}
          </label>
          <select
            name="favoriteOnly"
            id="favoriteOnly"
            className="rounded ml-2 h-8"
            value={valueSelect}
            onChange={(e) => numberverification(e.target.value)}
          >
            {dataKey.map((e) => (
              <option>{e}</option>
            ))}
          </select>
          <button
            disabled={!buttonDisable}
            type="submit"
            onClick={() => {
              handleValue(valueSelect);
            }}
            className="bg-white ml-11 w-20 rounded disabled:opacity-50 h-8"
          >
            Cargar
          </button>
        </form>
        <div className="border-zinc-900 mb-4 bg-zinc-900 ml-4 text-center mt-4 text-white pt-1 w-60">
          Arithmetic Average: {average}
        </div>
        <div className="border-zinc-900 mb-4 bg-zinc-900 ml-4 text-center mt-4 text-white pt-1 w-60">
          Median: {median}
        </div>
        <div className="border-zinc-900 mb-4 bg-zinc-900 ml-4 text-center mt-4 text-white pt-1 w-60">
          Variance: {variance}
        </div>
        <div className="border-zinc-900 mb-4 bg-zinc-900 ml-4 text-center mt-4 text-white pt-1 w-60">
          Standard Deviation: {desviation}
        </div>
      </div>
    </div>
  );
}
