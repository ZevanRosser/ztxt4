<?php
  
  if (isset($_REQUEST["dir"])){
    $dir = $_REQUEST["dir"];
  }else{
    if (is_dir("../../projects")){
      $dir = "../../projects";
    }else{
      die("you need to add a projects directory");
    }
  }
  
  $out = "";
  
  $files = glob($dir . "/*");
  
  function splitLast($str, $exp="/\//"){
    $n = preg_split($exp, $str);
    return $n[count($n) - 1];
  }
  
  $out = "<ul>";
  
  foreach($files as $file){
    $type = is_dir($file) ? 'directory' : 'file';
    
    $out .= "<li data-path='$file' class='$type'>" . splitLast($file) . "</li>";
  }
  
  $out .= "</ul>";
  
  echo $out;