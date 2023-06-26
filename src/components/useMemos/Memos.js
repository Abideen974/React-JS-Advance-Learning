import { Add, AddIcCallOutlined } from "@mui/icons-material";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Stack } from "@mui/material";
import React, { useMemo, useState } from "react";

const Memos = () => {
  // const [num, setNum] = useState(0);
  const [add, setAdd] = useState(0);
  const [subt, setSubt] = useState(10);
  const subtraction = () => {
    if(subt < 1){
      return alert("Your value exceeds the minimum value ")
    }else{
      setSubt(subt - 1);
    }
  };
  const additions = () => {
    setAdd(add + 1);
    
  };

  const unwante = useMemo(() => {
    console.log("unwanted functions");
    let num = 0;
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num
  },[subt]);
  return (
    <div>
      <Stack
        spacing={2}
        sx={{
          border: "6px double ",
          backgroundColor: "#11a79c",
          width: " 50%",
          margin: "50px auto",
        }}
      >
        <h3>useMemo hooks</h3>
        {unwante}
        <Box component="span" sx={{ marginTop: 30, p: 2 }}>
          <Button variant="contained" endIcon={<Add />} onClick={additions}>
            Add
          </Button>
          <h4>{add}</h4>
          <Button
            variant="contained"
            endIcon={<RemoveIcon />}
            onClick={subtraction}
          >
            Subtract
          </Button>
          <h4>{subt}</h4>
        </Box>
      </Stack>
    </div>
  );
};

export default Memos;
