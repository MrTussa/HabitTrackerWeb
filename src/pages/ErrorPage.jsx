import { NavLink } from "react-router-dom";
import { Button, Card } from "@mui/material";

export default function ErrorPage({}) {
  return (
    <div className="flex-1 flex justify-center items-center ">
      <Card className="!shadow-orange !p-5">
        <img src="404.png" alt="" className="w-48 mb-2" />
        <div className=" flex flex-col">
          <span>Ops, page not found</span>
          <Button type="primary" size="large">
            <NavLink to="/">Back to Overview</NavLink>
          </Button>
        </div>
      </Card>
    </div>
  );
}
