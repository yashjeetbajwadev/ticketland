import EventList from "@/components/EventList";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <EventList />
    </Suspense>
  );
}
