<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $comment = $_POST['comment'];

  if (!empty($username) && !empty($comment)) {
    echo "<p>Hi <b>{$username}</b>. Your comment has been received successfully</p>";
    echo "<p>Here is the comment that you've entered: <b>{$comment}</b></p>";
  } else {
    echo "<p>Please fill in all fields in the form!</p>";
  }
} else {
  echo "<p>Oops, something went wrong!</p>";
}
