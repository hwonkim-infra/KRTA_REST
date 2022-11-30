import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import { Field } from "react-final-form";
import DrawingAdditional from "./DrawingAdditional";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const allyProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const AddDrawings = (values) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="외관도" {...allyProps(0)} />
          <Tab label="붐" {...allyProps(1)} />
          <Tab label="암" {...allyProps(2)} />
          <Tab label="버켓" {...allyProps(3)} />
          <Tab label="퀵커플러" {...allyProps(4)} />
          <Tab label="배토판" {...allyProps(5)} />
          <Tab label="기타" {...allyProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <Field name="drawings.exterior">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Field name="drawings.boom">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Field name="drawings.arm">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        버켓 도면
        <Field name="drawings.bucket">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "500", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
        1. 평적 용량.
        <Field name="drawings.bucket_capa_struck">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{
                height: "500",
                resize: true,
                menubar: false,
                placeholder: "평적 용량 자료",
              }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
        2. 산적 용량.
        <Field name="drawings.bucket_capa_heap">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{
                height: "500",
                resize: true,
                menubar: false,
                placeholder: "산적 용량 자료",
              }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        <Field name="drawings.Qcouplr">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={5}>
        <Field name="drawings.dozer">
          {({ input: { onChange, value } }) => (
            <Editor
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              value={value}
              init={{ height: "960", resize: true, menubar: false }}
              onEditorChange={(e) => onChange(e)}
            />
          )}
        </Field>
      </TabPanel>
      <TabPanel value={tabValue} index={6}>
      <DrawingAdditional />
      

      </TabPanel>
    </>
  );
};

export default AddDrawings;
