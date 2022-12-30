import * as React from "react";

type DetailsListProps = {
  delimitedString: string;
};

export default function DetailsList(props: DetailsListProps) {
  const listItems = props.delimitedString.split(";");

  return (
    <ul style={{ marginTop: "0px", paddingLeft: "20px" }}>
      {listItems.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
