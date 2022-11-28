import React from "react";
import { Props } from "../interface/result";
import Thumbnail from "../components/Thumbnail";

function Body({ results }: Props) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result: any) => (
        <Thumbnail result={result} key={result.id} />
      ))}
    </div>
  );
}

export default Body;
