import LinkList from "@/components/LinkList";

const courses = {
  "": [
    {
      name: "MTH 203 - Linear Algebra I",
      route: "1st-semester/mth203",
    },
    {
      name: "MTH 211 - Statistics",
      route: "1st-semester/mth211",
    },
  ],
};

export default function _1st_semester() {
  return <LinkList items={courses} isOrdered={true} />;
}
