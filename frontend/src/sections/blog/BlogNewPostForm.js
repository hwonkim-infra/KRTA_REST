
import { Autocomplete, Card, Chip, Grid, Stack, styled, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RHFEditor, RHFTextField, RHFSwitch, RHFUploadSingleFile, FormProvider} from '../../components/hook-form'

const TAGS_OPTION = [
    'Toy Story 3',
    'Logan',
    'Full Metal Jacket',
    'Sting',
];

const LabelStyle= styled(Typography)(({theme}) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
}));



export default function BlogNewPostForm(params) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const NewBlogSchema = Yup.object().shape({
        title: Yup.string().required('Title required'),
        description: Yup.string().required('description required'),
        content: Yup.string().required('content required'),
    })

    const defaultValues={
        title: '',
        description: '',
        content: '',
        cover: '',
        tags: ['Logan'],
        publish: true,
        comments: true,
        metatitle: '',
        metaDescription: '',
        metaKeywords: ['Logan'],        
    }

    const methods = useForm({
        resolver: yupResolver(NewBlogSchema),
        defaultValues
    });

    const {reset, watch, control, setValve, handleSubmit, formState: {isSubmitting, isValid},} = methods;

    const values = watch();

    const onSubmit = async () => {
        try {
            await new Promise((resolve)=> setTimeout(resolve, 500));
            reset();
            navigate(PATH_DASHBOARD.blog.posts);
        } catch (error) {
            console.error(error.message);
        }

    }




  return (
    <>
      <FormProvider>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <RHFTextField name="title" label="Post Title" />
                <RHFTextField name="description" label="Description" multiline rows={3} />
                <div>
                  <LabelStyle>Content</LabelStyle>
                  <RHFEditor simple name="content" />
                </div>
                <div>
                  <LabelStyle>Cover</LabelStyle>
                  <RHFUploadSingleFile name="cover" maxSize={3145728} onDrop={handleDrop} />
                </div>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <div>
                <RHFSwitch name="publish" label="Publish" labelPlacement="start" sx={{md:1, mx: 0, width: 1, justifyContent: "space-between"}} />
                <RHFSwitch name="comments" label="Enable comments" labelPlacement="start" sx={{ mx: 0, width: 1, justifyContent: "space-between"}} />
                </div>

                <Controller name="tags" control={control} render={({field}) => (
                    <Autocomplete multiple freeSolo onChange={(event, newValue)=> field.onChange(newValue)} options={TAGS_OPTION.map((option)=> option)} renderTags={(value, getTagProps) => (value.map((option, index)=>(
                        <Chip {...getTagProps({index})} key={option} size="small" label={option} />
                    )))} renderInput={(params) => <TextField label="Tags" {...params} /> } />
                    )} />

              </Stack>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
      BlogNewPostPreview
    </>
  );
}
