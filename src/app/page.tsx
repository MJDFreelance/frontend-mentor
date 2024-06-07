import Image from "next/image";
import QRComponent from "@/components/molecules/QRComponent/QRComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <QRComponent />
    </main>
  );
}
