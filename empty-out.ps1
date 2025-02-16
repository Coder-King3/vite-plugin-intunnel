# 封装删除函数
function remove-filer($FOLDER_PATH) {
  $TRUE_FALSE=(Test-Path $FOLDER_PATH)
  if($TRUE_FALSE -eq "True"){
    remove-Item -Recurse -Force $FOLDER_PATH
  }
}

# 打印将要删除的目录
Write-Host "> remove-filer 'dist'"

# 删除打包文件
remove-filer("dist")
