import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import useStyles from "./styles";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/user/user.actions";
import { Avatar } from "@material-ui/core";
export default function Register(props) {
  const classes = useStyles();
  const [imagePreview, setImagePreview] = useState(
    "mui-assets/img/profile.png"
  );
  const [avatar, setAvatar] = useState("");
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {}
  });
  const dispatch = useDispatch();
  const content = {
    brand: {
      image: "mui-assets/img/logo.png",
      width: 120
    },
    "02_header": "Create a new account",
    "02_primary-action": "Sign up",
    "02_secondary-action": "Do you have an account?",
    "02_tertiary-action": "Forgot password?",
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    console.log(content.brand.image);

    brand = (
      <img
        src={content.brand.image}
        alt="logo"
        width={content.brand.width}
        height={content.brand.height}
      />
    );
  } else {
    brand = content.brand.text || "Dhanai Fruit Mart";
  }
  const onSubmit = ({ name, email, password }) => {
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);
    dispatch(userRegister(formData));
  };
  const handleFilePreview = (e) => {
    e.preventDefault();
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              {brand}
            </Link>
            <Typography variant="h5" component="h2">
              {content["02_header"]}
            </Typography>
          </Box>
          <Box>
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="name"
                    id="name"
                    autoFocus={true}
                    error={!!errors.name}
                    helperText={`${
                      !!errors.name ? "Please enter full name" : ""
                    }`}
                    inputRef={register({ required: true })}
                    label="Full Name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    id="email"
                    error={!!errors.email}
                    helperText={`${
                      !!errors.email ? "Please enter email address" : ""
                    }`}
                    inputRef={register({ required: true })}
                    label="Email address"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="password"
                    name="password"
                    id="password"
                    error={!!errors.password}
                    helperText={`${
                      !!errors.password ? "Please enter password" : ""
                    }`}
                    inputRef={register({ required: true })}
                    label="Password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <div className={classes.avatar}>
                    <Avatar src={imagePreview} alt="Avatar"></Avatar>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFilePreview}
                      className={classes.fileUpload}
                      ref={register}
                      name="avatar"
                    />
                  </div>
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {content["02_primary-action"]}
                </Button>
              </Box>
              <Grid container spacing={2} className={classes.actions}>
                <Grid item xs={12} sm={6}>
                  <Link href="#" variant="body2">
                    {content["02_secondary-action"]}
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                  <Link href="#" variant="body2">
                    {content["02_tertiary-action"]}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
