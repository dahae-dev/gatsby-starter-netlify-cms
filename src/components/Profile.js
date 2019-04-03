import React from "react"
import { Container } from "reactstrap"
import { getUser } from "../services/auth"

const Profile = () => (
  <>
    <Container>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {getUser()}</li>
      </ul>
    </Container>
  </>
)

export default Profile
