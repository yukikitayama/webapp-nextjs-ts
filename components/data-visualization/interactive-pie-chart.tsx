import Grid from "@mui/material/Grid";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import {
  PieChart,
  Pie,
  Tooltip,
  LabelList,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

import {
  tabBlue,
  tabOrange,
  tabGreen,
  tabRed,
  tabPurple,
  tabBrown,
  tabPink,
} from "../../utils/style";

interface InteractivePieChartProps {
  title?: string;
  yAxisLabel?: string;
  data?: {
    index: string;
    value: number;
  }[];
  start?: Date | null;
  setStart?(newValue: Date | null): void;
  end?: Date | null;
  setEnd?(newValue: Date | null): void;
  fetchData?: () => void;
  isLoading?: boolean;
}

// matplotlib tableau palette
const colors = [
  tabBlue,
  tabOrange,
  tabGreen,
  tabRed,
  tabPurple,
  tabBrown,
  tabPink
];

const InteractivePieChart: React.FC<InteractivePieChartProps> = (props) => {
  const handleStartChange = (newValue: Dayjs | null) => {
    const nativeDate = newValue!.toDate();
    props.setStart!(nativeDate);
  };

  const handleEndChange = (newValue: Dayjs | null) => {
    const nativeDate = newValue!.toDate();
    props.setEnd!(nativeDate);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography align="center" variant="h5" gutterBottom>
          {props.title}
        </Typography>
      </Grid>

      {props.isLoading && (
        <Grid item xs={12} textAlign="center">
          <CircularProgress />
        </Grid>
      )}

      <Grid item xs={12}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={props.data}
              dataKey="value"
              nameKey="index"
              startAngle={90}
              endAngle={-270}
              outerRadius="90%"
            >
              {props.data!.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Grid>

      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <MobileDatePicker
              label="Start"
              inputFormat="MM/DD/YYYY"
              value={props.start}
              onChange={handleStartChange}
              renderInput={(params) => (
                <TextField {...params} variant="standard" size="small" />
              )}
            />
            <MobileDatePicker
              label="End"
              inputFormat="MM/DD/YYYY"
              value={props.end}
              onChange={handleEndChange}
              renderInput={(params) => (
                <TextField {...params} variant="standard" size="small" />
              )}
            />
            <Button variant="outlined" size="small" onClick={props.fetchData}>
              Update
            </Button>
          </Stack>
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default InteractivePieChart;
