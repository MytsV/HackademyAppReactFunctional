import { Forecast } from "../objects/Forecast";
import ForecastRow from "./ForecastRow";

export default function ForecastTable(forecasts: Forecast[]): JSX.Element {
    if (forecasts.length === 0) {
      return <div></div>
    } else {
      return <table id="forecast-table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Температура</th>
            <th>Відчувається, як</th>
            <th>Швидкість вітру</th>
            <th>Погода</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((item) => {
            return ForecastRow(item);
          })}
        </tbody>
      </table>
    }
}