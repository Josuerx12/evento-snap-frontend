export interface PagitationOutput<EntityT> {
  items: EntityT[];
  totalPages: number;
  totalItems: number;
  page: number;
  perPage: number;
}
