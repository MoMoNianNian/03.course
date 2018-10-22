<?php
  header('Content-type:application/json');           
  //获取 first.json
  //使用file_get_contents(路径)
  $data = file_get_contents('./first.json');
  echo $data;

?>