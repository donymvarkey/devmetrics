import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DataTableProps } from "../types/types";
import AppCard from "./AppCard";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

function CustomTable<TData, TValue>({
  columns,
  data,
  title,
  showPagination = false,
}: DataTableProps<TData, TValue>) {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10; // You can make this configurable

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination: { pageIndex, pageSize } },
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        setPageIndex(
          (prev) => updater({ pageIndex: prev, pageSize }).pageIndex
        );
      } else {
        setPageIndex(updater.pageIndex);
      }
    },
    manualPagination: false,
    pageCount: Math.ceil(data.length / pageSize),
  });

  const totalPages = table.getPageCount();

  return (
    <AppCard title={title}>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead className="font-bold" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination Controls */}
      {showPagination && (
        <div className="flex items-center justify-between mt-4 px-2">
          <div className="flex items-center">
            <button
              className="px-2 py-1 rounded bg-gray-100 text-gray-700 mr-2 disabled:opacity-50"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronsLeft />
            </button>
            <button
              className="px-2 py-1 rounded bg-gray-100 text-gray-700 mr-2 disabled:opacity-50"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft />
            </button>
            <span className="text-sm text-gray-600 mx-3">
              Page <span className="font-semibold">{pageIndex + 1}</span> of{" "}
              <span className="font-semibold">{totalPages}</span>
            </span>
            <button
              className="px-2 py-1 rounded bg-gray-100 text-gray-700 mr-2 disabled:opacity-50"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight />
            </button>
            <button
              className="px-2 py-1 rounded bg-gray-100 text-gray-700 disabled:opacity-50"
              onClick={() => table.setPageIndex(totalPages - 1)}
              disabled={!table.getCanNextPage()}
            >
              <ChevronsRight />
            </button>
          </div>
        </div>
      )}
    </AppCard>
  );
}

export default CustomTable;
