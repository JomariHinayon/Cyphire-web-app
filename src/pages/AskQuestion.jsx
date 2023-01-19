import React from "react";
import Search from "../components/SearchContainer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AskQuestion = () => {
  return (
    <>
      <Search text="Ask a Question" />
      <div className="h-[70vh] flex">
        {/* LEFT CONTAIER */}
        <div className="left-container flex flex-col w-1/4 h-[73.5vh] bg-gray-200 items-center">
          {/* rating */}
          <div className=" mt-10 flex items-center w-[85%]">
            <h1 className="font-semibold pr-2">Ratings</h1>
            <select
              name="skills"
              id="skills"
              className="border-2 border-black w-48"
            >
              <option value="one star">1 star</option>
              <option value="two star">2 star</option>
              <option value="three star">3 star</option>
              <option value="four star">4 star</option>
              <option value="five star">5 star</option>
            </select>
          </div>
          {/* date */}
          <div className=" mt-10 flex items-center w-[85%]">
            <h1 className="font-semibold pr-2">Date</h1>
            <select
              name="skills"
              id="skills"
              className="border-2 border-black w-56"
            >
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </div>
        </div>
        {/* RIGHT CONTAIER */}
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            maxWidth: '100%',
          }}
          noValidate
          autoComplete="off"
          className="flex flex-col w-full"
          padding={3}
        >
          <TextField
            id="outlined-password-input"
            label="Username"
            type="text"
            sx={{ width: "" }}
          />
          <TextField
            fullWidth
            id="fullWidth"
            label="Full Name"
            type="text"
          />  
          <TextField
            id="filled-multiline-static"
            label="Question"
            multiline
            rows={7}
            //   defaultValue="Enter question here"
            variant="filled"
          />
          <Button variant="contained" className="w-32">Submit</Button>
        </Box>
      </div>
    </>
  );
};

export default AskQuestion;
