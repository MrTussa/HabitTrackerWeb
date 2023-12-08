import { NavLink } from "react-router-dom";
import { Button, Card } from "@mui/material";

export default function ErrorPage({}) {
  return (
    <div className="flex-1 flex justify-center items-center ">
      <Card className="!shadow-orange" cover={<img alt="404" src="404.png" />}>
        <div className="!p-5 flex flex-col">
          <span>Страница Не Найдена</span>
          <Button type="primary" size="large">
            <NavLink to="/">Назад на Главную</NavLink>
          </Button>
        </div>
      </Card>
    </div>
  );
}
