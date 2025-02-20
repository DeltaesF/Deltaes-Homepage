"use client";
import WriteForm from "@/app/components/updateposts/WriteForm";
interface WriteProps {
  setSelectMenu: (menu: string) => void;
}

export default function Write({ setSelectMenu }: WriteProps) {
  return <WriteForm setSelectMenu={setSelectMenu} />;
}
