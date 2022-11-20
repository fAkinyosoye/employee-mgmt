import { useTable } from "react-table";

import { Loader } from "../atoms/Loader";

// import { OystrPagination } from "./OystrPagination";
import { Button } from "./Button";

const Table = ({
  data,
  columns,
  isLoading,
  pagination,
  ifPagination = false,
  onClick,
  ifHover = false,
  emptyImage,
  emptyStateText,
}: any) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const emptyTable = () => {
    return (
      <div className="h-full font-thin">
        {data.length < 1 ? (
          <div className="flex flex-col justify-center items-center w-full">
            <img src={emptyImage} alt="emptyImage" />
            <p className="font-medium text-xl text-black/80 pt-6">
              Nothing to show here
            </p>
            <p className="font-light text-sm text-black/80 pt-2">
              Click the button below to learn more
            </p>
            <Button
              type="button"
              text={emptyStateText}
              className="text-white mt-4 border-none"
              bgColor="#201CFF"
              paddingX="12"
              paddingY="2"
            />
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      {rows.length || isLoading ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="overflow-auto">
              <table
                {...getTableProps()}
                className="w-full table min-w-full overflow-x-auto text-blackTwo px-5"
              >
                <thead>
                  {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column: any) => (
                        <th
                          {...column.getHeaderProps()}
                          className="font-normal whitespace-nowrap text-sm uppercase py-6 text-left"
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row: any) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        className="text-left"
                        // onClick={() => onClick(row.original)}
                      >
                        {row.cells.map((cell: any) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="whitespace-nowrap font-normal py-3 text-base"
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* {ifPagination && <OystrPagination {...pagination} />} */}
            </div>
          )}
        </>
      ) : (
        <div>{emptyTable()}</div>
      )}{" "}
    </>
  );
};
export { Table };
