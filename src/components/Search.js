import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Plan from "./Plan";

export default function Search() {
  const [age, setAge] = React.useState("Man");
  const [toAge, setToAge] = React.useState("Man");
  const [gender, setGender] = React.useState("Man");
  const [religion, setReligion] = React.useState("Man");
  const [motherTounge, setMotherTounge] = React.useState("Man");
  const [isPlan,setIsplan]=React.useState(false);

  const handelPlan=()=>{
    setIsplan(true)
  }

  console.log("Ankush",isPlan)

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
    <div  style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:"100%"
       
       }}>
    <div className="outer" style={{justifyContent:'center'}}>
      <div
        style={{
          alignItem: "center",
          marginLeft: "30px",
          marginRight: "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={1.5}>
            <div>
              <div style={{ color: "white" }}>I'm looking for a</div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={gender}
                  onChange={genderHandleChange}
                  defaultValue="Man"
                  autoWidth
                  label="Age"
                  style={{ backgroundColor: "white", color: "grey" }}
                >
                  <MenuItem value={10}>Man</MenuItem>
                  <MenuItem value={21}>Woman</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={1.2}>
            <div>
              <div style={{ color: "white" }}>aged</div>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={setAge}
                  autoWidth
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
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={0.5}>
            <div style={{ color: "white", marginTop: "40px" }}>to</div>
          </Grid>
          <Grid item xs={2}>
            <div style={{ marginTop: "20px" }}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={toAge}
                  onChange={toAgeHandleChange}
                  autoWidth
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
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              <div style={{ color: "white" }}>of religion</div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={religion}
                  onChange={religionHandleChange}
                  autoWidth
                  label="Age"
                  style={{ backgroundColor: "white", color: "grey" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Hindu</MenuItem>
                  <MenuItem value={21}>Muslim</MenuItem>
                  <MenuItem value={22}>Sikh</MenuItem>
                  <MenuItem value={22}>Parsi</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={2.8}>
            <div>
              <div style={{ color: "white" }}>and mother tounge</div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={motherTounge}
                  onChange={motherToungeHandleChange}
                  autoWidth
                  label="Age"
                  style={{ backgroundColor: "white", color: "grey" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Hindi</MenuItem>
                  <MenuItem value={21}>Marathi</MenuItem>
                  <MenuItem value={22}>Bangali</MenuItem>
                  <MenuItem value={22}>Punjabi</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Button style={{ marginTop: "40px" }} variant="contained" onClick={()=>handelPlan()}>
              Let's Begin
            </Button>
          </Grid>
        </Grid>
        <Plan isPlanData={isPlan}/>
      </div>
    </div>

    </div>
  );
}
