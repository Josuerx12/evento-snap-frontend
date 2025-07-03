import TableRow from "@/components/tables/TableRow";
import { EventOutput } from "@/types/event.type";
import React from "react";

const EventTable = ({ events }: { events: EventOutput[] }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Data do Evento</th>
          <th>Ultima atualização</th>
        </tr>
      </thead>

      <tbody>
        {events.map((e) => (
          <TableRow href={"/galerias/" + e.id} key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.description}</td>
            <td>{new Date(e.eventDate)?.toLocaleString("pt-BR")}</td>
            <td>{new Date(e.updatedAt!)?.toLocaleString("pt-BR")}</td>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
