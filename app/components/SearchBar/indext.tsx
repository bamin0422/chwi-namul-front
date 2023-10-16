"use client";
import { atom, useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {};

  const handleOnKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <form
      action={`board/all/`}
      id="search"
      className={`flex px-4 py-2 mt-6 bg-white rounded-full border border-green-700 justify-center hover:shadow-xl ${
        isFocused ? "shadow-xl" : ""
      }`}
    >
      <button type="submit" className="pr-4 w-4 h-4 mt-1">
        <BsSearch color="green" />
      </button>
      <p className="ml-2 md-2 text-green-700">|</p>
      <input
        type="text"
        autoFocus
        placeholder="개발 직무를 입력해주세요.              "
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={handleOnKeyPress}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="ml-2 text-black text-align-left md:w-[374px] w-[256px] focus:outline-none"
      />
    </form>
  );
}
