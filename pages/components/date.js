import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time>{format(date, "MMMM d, yyyy")}</time>;
}
