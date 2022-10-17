import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import Plan from "./Plan";

export default function Search() {
  const [age, setAge] = React.useState("Man");
  const [toAge, setToAge] = React.useState("Man");
  const [gender, setGender] = React.useState("Man");
  const [religion, setReligion] = React.useState("Man");
  const [motherTounge, setMotherTounge] = React.useState("Man");
  const [isPlan, setIsplan] = React.useState(false);

  const handelPlan = () => {
    setIsplan(true)
  }

  console.log("Ankush", isPlan)

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const motherToungeHandleChange = (event) => {
    setMotherTounge(event.target.value);
  };

  const religionHandleChange = (event) => {
    setReligion(event.target.value);
  };

  const genderHandleChange = (event) => {
    setGender(event.target.value);
  };

  const toAgeHandleChange = (event) => {
    setToAge(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%"

    }}>
      <div className="outer" style={{ justifyContent: 'center', width: "100%" }}>
        <div
          style={{
            alignItem: "center",
            marginLeft: "30px",
            marginRight: "30px",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={2}>
              <div>
                <InputLabel style={{ color: "white" }}>I'm looking for a</InputLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <TextField
                    select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    variant="standard"
                    value={gender}
                    onChange={genderHandleChange}
                    defaultValue="Man"
                    fullWidth
                    label="Gender"
                    style={{ backgroundColor: "white", color: "grey" }}
                  >
                    <MenuItem value={10}>Man</MenuItem>
                    <MenuItem value={21}>Woman</MenuItem>
                  </TextField>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={1}>
              <div>
                <InputLabel style={{ color: "white" }}>aged</InputLabel>
                <FormControl sx={{ m: 1 }}>
                  <TextField
                    select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    variant="standard"
                    value={age}
                    onChange={setAge}
                    fullWidth
                    label="Age"
                    style={{ backgroundColor: "white", color: "grey" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={20}>21</MenuItem>
                    <MenuItem value={20}>22</MenuItem>
                    <MenuItem value={20}>23</MenuItem>
                    <MenuItem value={20}>24</MenuItem>
                    <MenuItem value={20}>25</MenuItem>
                    <MenuItem value={20}>26</MenuItem>
                    <MenuItem value={20}>27</MenuItem>
                    <MenuItem value={20}>28</MenuItem>
                    <MenuItem value={20}>29</MenuItem>
                    <MenuItem value={20}>30</MenuItem>
                  </TextField>
                </FormControl>

              </div>

            </Grid>
            <div style={{ color: "white", marginTop: "40px", marginLeft: "20px", marginRight: "20px" }}>to</div>

            <Grid item xs={1}>
              <InputLabel style={{ marginTop: "20px" }}>
                <FormControl sx={{ m: 1 }}>
                  <TextField
                    select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    variant="standard"
                    value={toAge}
                    onChange={toAgeHandleChange}
                    fullWidth
                    label="Age"
                    style={{ backgroundColor: "white", color: "grey" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={20}>21</MenuItem>
                    <MenuItem value={20}>22</MenuItem>
                    <MenuItem value={20}>23</MenuItem>
                    <MenuItem value={20}>24</MenuItem>
                    <MenuItem value={20}>25</MenuItem>
                    <MenuItem value={20}>26</MenuItem>
                    <MenuItem value={20}>27</MenuItem>
                    <MenuItem value={20}>28</MenuItem>
                    <MenuItem value={20}>29</MenuItem>
                    <MenuItem value={20}>30</MenuItem>
                  </TextField>
                </FormControl>
              </InputLabel>
            </Grid>
            <Grid item xs={2}>
              <div>
                <InputLabel style={{ color: "white" }}>of religion</InputLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <TextField
                    variant="standard"
                    select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={religion}
                    onChange={religionHandleChange}
                    fullWidth
                    label="Religion"
                    style={{ backgroundColor: "white", color: "grey" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hindu</MenuItem>
                    <MenuItem value={21}>Muslim</MenuItem>
                    <MenuItem value={22}>Sikh</MenuItem>
                    <MenuItem value={22}>Parsi</MenuItem>
                  </TextField>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                <InputLabel style={{ color: "white" }}>and mother tounge</InputLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <TextField
                    select
                    variant="standard"
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={motherTounge}
                    onChange={motherToungeHandleChange}
                    fullWidth
                    label="Language"
                    style={{ backgroundColor: "white", color: "grey" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hindi</MenuItem>
                    <MenuItem value={21}>Marathi</MenuItem>
                    <MenuItem value={22}>Bangali</MenuItem>
                    <MenuItem value={22}>Punjabi</MenuItem>
                  </TextField>
                </FormControl>
              </div>
            </Grid>
            <Grid item sm={2} xs={12}>
              <Button fullWidth style={{ marginTop: "40px" }} variant="contained" onClick={() => handelPlan()}>
                Let's Begin
              </Button>
            </Grid>
          </Grid>
          <Plan isPlanData={isPlan} />
        </div>
      </div>

    </div>
  );
}
