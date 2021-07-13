import { createConsumer } from "@rails/actioncable";
import { API_URL } from "../api";

export default createConsumer(`${API_URL}/cable`);
