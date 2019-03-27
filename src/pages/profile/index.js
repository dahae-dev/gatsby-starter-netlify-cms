import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/Layout"
import PrivateRoute from "../../components/reusable/privateRoute"
import Profile from "../../components/Profile"

const ProfilePage = () => (
  <>
    <Layout>
      <Router>
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
    </Layout>
  </>
)

export default ProfilePage
