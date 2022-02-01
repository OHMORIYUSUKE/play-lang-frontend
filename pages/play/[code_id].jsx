import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { styled } from "@mui/material/styles";

import { useRouter } from "next/router";

import { useRecoilState, useRecoilValue } from "recoil";
import { pageThemeState } from "../../components/store/PlayPage/pageTheme";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function Play() {
  const router = useRouter();
  const page_param_code_id = router.query.postid;

  const [theme, setPageTheme] = useRecoilState(pageThemeState);

  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }} style={{ padding: "0 2em" }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Item>
              <h4 style={{ textAlign: "center", margin: "5px" }}>コード</h4>
              <Editor height="70vh" theme={theme} />
              <h4 style={{ textAlign: "center", margin: "5px" }}>標準入力</h4>
              <Editor height="30vh" theme={theme} />
              <br />
              <h4 style={{ textAlign: "center", margin: "5px" }}>実行結果</h4>
              <div
                style={{
                  minHeight: "130px",
                  padding: "10px",
                  position: "relative",
                }}
              >
                <Button
                  style={{
                    position: "absolute",
                    right: "10px",
                  }}
                >
                  <b>📋 コピー</b>
                </Button>
              </div>
            </Item>
          </Grid>
          {/* 設定(右側) */}
          <Grid item xs={3}>
            <div
              style={{
                marginBottom: "20px",
                position: "sticky",
                zIndex: "1",
                top: "10px",
              }}
            >
              <Item>
                <h4 style={{ textAlign: "center", margin: "8px" }}>設定</h4>
                <FormControl size="small">
                  <Select
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    value={theme}
                    onChange={(e) => setPageTheme(e.target.value)}
                  >
                    <MenuItem value="light">ライト</MenuItem>
                    <MenuItem value="vs-dark">ダーク</MenuItem>
                  </Select>
                  <FormHelperText>エディタのテーマを選択</FormHelperText>
                </FormControl>
                <br />
                <br />
                <Divider />
                <br />
                <h4 style={{ textAlign: "center", margin: "8px" }}>実行</h4>
                <FormControl size="small">
                  <Select
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    value={"python"}
                  >
                    <MenuItem value={"python"}>{"Python"}</MenuItem>
                  </Select>
                  <FormHelperText>実行したい言語を選択</FormHelperText>
                </FormControl>
              </Item>
              <Item style={{ marginTop: "1rem" }}>
                <h4 style={{ textAlign: "center", margin: "8px" }}>注意事項</h4>
                <p>３秒以内で実行できるコードにしてください。</p>
                <p>※入力されたコードはPython 3.10.0で実行されます。</p>
              </Item>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Play;
