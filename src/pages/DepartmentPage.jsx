import { useParams } from "react-router";

function DepartmentPage() {
  const params = useParams();

  return <div>department {params.departmentId}</div>;
}

export default DepartmentPage;