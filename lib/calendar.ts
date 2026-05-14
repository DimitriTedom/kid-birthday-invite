type CalendarEvent = {
  title: string;
  uid: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
};

const formatGoogleDate = (date: Date) =>
  date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

export const buildGoogleCalendarUrl = (event: CalendarEvent) => {
  const start = formatGoogleDate(event.startDate);
  const end = formatGoogleDate(event.endDate);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    details: event.description ?? "",
    location: event.location ?? "",
    dates: `${start}/${end}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const buildIcsFileContent = (event: CalendarEvent) => {
  const start = formatGoogleDate(event.startDate);
  const end = formatGoogleDate(event.endDate);

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nolan Invitation//FR",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${start}-${event.uid}@invitation`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description ?? ""}`,
    `LOCATION:${event.location ?? ""}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");
};

export const downloadIcsFile = (content: string, filename: string) => {
  if (typeof window === "undefined") {
    return;
  }

  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};
