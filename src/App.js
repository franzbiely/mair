import "./App.css";
import Header from "./Header";
import Products from "./Products";
import ProductList from "./ProductList";
import { useState } from "react";
import { ProductContext } from "./ProductContext";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import User from "./User";
import UserList from "./UserList";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "lightGray",
  },
}));

function App() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [name, setName] = useState(" ");
  const [quantity, setQuantity] = useState(" ");
  const [image, setImage] = useState(" ");
  const [i, setI] = useState(" ");
  const clearFields = () => {
    setName("");
    setQuantity("");
    setImage("");
    setI("");
  };

  // CategoryForm
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const clearText = () => {
    setCategory("");
    console.log(category);
  };
  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearUser = () => {
    console.log(firstName, lastName, birthday, age, userName, email, password);
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setBirthday("");
    setAge("");
  };

  const providerValue = {
    // USER
    user,
    addUser: (
      firstName,
      lastName,
      birthday,
      age,
      userName,
      email,
      password
    ) => {
      setUser([
        ...user,
        { firstName, lastName, birthday, age, userName, email, password },
      ]);
    },
    firstName,
    setFirstName,
    lastName,
    setLastName,
    birthday,
    setBirthday,
    age,
    setAge,
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    clearUser,

    deleteUser(i) {
      const tempUser = [...user];
      tempUser.splice(i, 1);
      setUser(tempUser);
    },
    editUser(i) {
      const editableUser = user.find((user, C) => {
        console.log({ i, C });
        return i === C;
      });
      console.log({ editableUser });
      setFirstName(editableUser.firstName);
      setLastName(editableUser.lastName);
      setBirthday(editableUser.birthday);
      setAge(editableUser.age);
      setUserName(editableUser.userName);
      setEmail(editableUser.email);
      setPassword(editableUser.password);
      setI(i);
    },

    saveEditUser(i) {
      const updateUser = [...user];
      updateUser[i] = {
        firstName,
        lastName,
        birthday,
        age,
        userName,
        email,
        password,
      };
      setUser(updateUser);
    },
    i,

    // CATEGORY
    categories,
    addCategory: (category) => {
      setCategories([...categories, { category }]);
    },
    deleteCategory(i) {
      const tempCategory = [...categories];
      tempCategory.splice(i, 1);
      setCategories(tempCategory);
    },
    category,
    setCategory,
    clearText,
    editCategory(i) {
      const editableCategory = categories.find((category, w) => {
        console.log({ i, w });
        return i === w;
      });
      console.log({ editableCategory });
      setCategory(editableCategory.category);
      setI(i);
    },
    saveEditCategory(i) {
      const updateCategory = [...categories];
      updateCategory[i] = { category };
      setCategories(updateCategory);
    },
    i,

    //  Products
    products,
    setProducts: (name, quantity, image) => {
      setProducts([...products, { name, quantity, image }]);
    },
    deleteProduct(i) {
      const tempProduct = [...products];
      tempProduct.splice(i, 1);
      setProducts(tempProduct);
    },

    // edit
    name,
    setName,
    quantity,
    setQuantity,
    image,
    setImage,
    clearFields,

    editProduct(i) {
      const editableItems = products.find((product, j) => {
        console.log({ i, j });
        return i === j;
      });
      console.log({ editableItems });
      setName(editableItems.name);
      setQuantity(editableItems.quantity);
      setImage(editableItems.image);
      setI(i);
    },
    // saveEdit
    saveEditProducts(i) {
      const update = [...products];
      update[i] = { name, quantity, image };
      setProducts(update);
    },
    i,
  };
  return (
    <div className="App">
      <ProductContext.Provider value={providerValue}>
        <Router>
          <Grid container spacing={3}>
            <Paper className={classes.paper}>
              <Grid
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                item
                xs={2}
              >
                <Box ml={8} align="left">
                  <h1>Options</h1>

                  <Link to="/products"> <ShoppingCartIcon/>
                    Products
                  </Link><br />
                  <Link to="/user"><PersonIcon/> User</Link> <br />
                  <Link to="/category"> <ListIcon/> Category</Link> <br />
                </Box>
              </Grid>
            </Paper>
            <Grid
              justifyContent="flex-end"
              alignItems="flex-start"
              item
              xs={10}
            >
              <Switch>
                <Route exact path="/products">
                  <Header />
                  <Products />
                  <ProductList />
                </Route>
                <Route exact path="/user">
                  <User />
                  <UserList />
                </Route>

                <Route path="/category">
                  <CategoryForm />
                  <CategoryList />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Router>
        {/* <Header />
        <Products />
        <ProductList /> 
        <CategoryForm />
        <CategoryList />
        <User/>
        <UserList/> */}
      </ProductContext.Provider>
    </div>
  );
}

export default App;
