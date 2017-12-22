using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Xml.Linq;
using System.IO;
using System.Net;
using System.Text;
public partial class FileUpload : System.Web.UI.Page
{
    //配置在web.config
    private string ftpServerIP = "192.168.1.108";//服务器IP
    private string ftpUserID = "";   //用户名
    private string ftpPassword = "";   //密码
    private string path = "D:\\data\\";
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    #region 文件上传
    /// <summary>
    /// FTP上传
    /// </summary>
    /// <param name="fileName"></param>
    private void UpLoad(string fileName)
    {
        FileInfo fileInf = new FileInfo(fileName);
        //获得本地文件的修改日期
        DateTime lastWriteTime = fileInf.LastWriteTime;
        string uri = "ftp://" + ftpServerIP + "/" + fileInf.Name;
        FtpWebRequest reqFTP;
        //根据url创建ftpWebRequest对象
        reqFTP = (FtpWebRequest)FtpWebRequest.Create(new Uri("ftp://" + ftpServerIP + "/" + fileInf.Name));
        //ftp用户名和密码
        reqFTP.Credentials = new NetworkCredential(ftpUserID, ftpPassword);
        //默认为true,连接不会关闭
        //在一个命令后被执行
        reqFTP.KeepAlive = false;
        //指定执行什么命令
        reqFTP.Method = WebRequestMethods.Ftp.UploadFile;
        //指定数据传输类型binary二进制
        reqFTP.UseBinary = true;
        //上传文件时通知服务器文件的大小
        reqFTP.ContentLength = fileInf.Length;
        //缓冲大小设置为2kb
        int bufflength = 2048;
        byte[] buff = new byte[bufflength];
        int contentlen;
        //打开一个文件流（System.IO.FileStream）去读上传的文件
        FileStream fs = fileInf.OpenRead();
        try
        {
            //上传文件写入流
            Stream strm = reqFTP.GetRequestStream();
            //每次读取文件流的2kb
            contentlen = fs.Read(buff, 0, bufflength);
            //流内容没有结束
            while (contentlen != 0)
            {
                strm.Write(buff, 0, contentlen);
                contentlen = fs.Read(buff, 0, bufflength);
            }
            strm.Close();
            fs.Close();
       //     this.Page.RegisterStartupScript("", "<script>alert('成功')</script>");
         //   this.Page.RegisterStartupScript("", "<script>aaa();</script>");
      //      ClientScript.RegisterStartupScript(this.GetType(), "myscript", "<script>aaa();</script>");
            succeed.Attributes["style"] = "display:''";

        }
        catch (Exception ex)
        {
            Response.Write("upload error" + ex.Message);
        }
    }
    #endregion
    #region FTP服务器下载文件
    /// <summary>
    /// FTP服务器下载文件
    /// </summary>
    /// <param name="filePath"></param>
    /// <param name="fileName"></param>
    private void Download(string filePath, string fileName)
    {
        FtpWebRequest reqFTP;
        try
        {
            FileStream outputStream = new FileStream(filePath + "\\" + fileName, FileMode.Create);
            reqFTP = (FtpWebRequest)FtpWebRequest.Create(new Uri("ftp://" + ftpServerIP + "/" + fileName));
            reqFTP.Method = WebRequestMethods.Ftp.DownloadFile;
            reqFTP.UseBinary = true;
            reqFTP.Credentials = new NetworkCredential(ftpUserID, ftpPassword);
            FtpWebResponse response = (FtpWebResponse)reqFTP.GetResponse();
            Stream ftpStream = response.GetResponseStream();
            long cl = response.ContentLength;
            int bufferSize = 2048;
            int readCount;
            byte[] buffer = new byte[bufferSize];
            readCount = ftpStream.Read(buffer, 0, bufferSize);
            while (readCount > 0)
            {
                outputStream.Write(buffer, 0, readCount);
                readCount = ftpStream.Read(buffer, 0, bufferSize);
            }
            ftpStream.Close();
            outputStream.Close();
            response.Close();
        }
        catch (Exception ex)
        {
            Response.Write("Download error" + ex.Message);
        }
    }
    #endregion
    #region 从ftp服务器上获得文件列表
    public string[] GetFileList()
    {
        string[] downloadFiles;
        StringBuilder result = new StringBuilder();
        FtpWebRequest reqFTP;
        try
        {
            reqFTP = (FtpWebRequest)FtpWebRequest.Create(new Uri("ftp://" + ftpServerIP + "/"));
            reqFTP.UseBinary = true;
            reqFTP.Credentials = new NetworkCredential(ftpUserID, ftpPassword);
            reqFTP.Method = WebRequestMethods.Ftp.ListDirectory;
            WebResponse response = reqFTP.GetResponse();
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string line = reader.ReadLine();
            while (line != null)
            {
                result.Append(line);
                result.Append("\n");
                line = reader.ReadLine();
            }
            result.Remove(result.ToString().LastIndexOf('\n'), 1);
            reader.Close();
            response.Close();
            return result.ToString().Split('\n');
        }
        catch (Exception ex)
        {
            downloadFiles = null;
            return downloadFiles;
        }
    }
    #endregion

    protected void BtnUpload_Click(object sender, EventArgs e)
    {
        UpLoad("E:\\test.txt");
    }
    /// <summary>
    /// 通过选择上传按钮事件
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void BtnUPFile_Click(object sender, EventArgs e)
    {

        UpLoadCurrentOrAll();
    }
    public void GetFileNameList()
    {
        string path = "E:\\";
    }
    /// <summary>
    /// 根据条件上传当天文件
    /// </summary>
    /// <param name="fileName"></param>
    private void UpLoadCurrentOrAll()
    {
        DirectoryInfo dir = new DirectoryInfo(path);
        FileInfo[] files = dir.GetFiles();
        string dateCurrent = DateTime.Now.ToShortDateString();
        foreach (FileInfo fi in files)
        {
            string a = fi.LastWriteTime.ToShortDateString();
            if (a == dateCurrent)
            {
                FileInfo fileInf = new FileInfo(path + fi.Name);
                //获得本地文件的修改日期
                DateTime lastWriteTime = fileInf.LastWriteTime;
                string uri = "ftp://" + ftpServerIP + "/" + fileInf.Name;
                FtpWebRequest reqFTP;
                //根据url创建ftpWebRequest对象
                reqFTP = (FtpWebRequest)FtpWebRequest.Create(new Uri("ftp://" + ftpServerIP + "/" + fileInf.Name));
                //ftp用户名和密码
                reqFTP.Credentials = new NetworkCredential(ftpUserID, ftpPassword);
                //默认为true,连接不会关闭
                //在一个命令后被执行
                reqFTP.KeepAlive = false;
                //指定执行什么命令
                reqFTP.Method = WebRequestMethods.Ftp.UploadFile;
                //指定数据传输类型binary二进制
                reqFTP.UseBinary = true;
                //上传文件时通知服务器文件的大小
                // reqFTP.ContentLength = fileInf.Length;
                //缓冲大小设置为2kb
                int bufflength = 2048;
                byte[] buff = new byte[bufflength];
                int contentlen;
                //打开一个文件流（System.IO.FileStream）去读上传的文件
                FileStream fs = fileInf.OpenRead();
                try
                {
                    //上传文件写入流
                    Stream strm = reqFTP.GetRequestStream();
                    //每次读取文件流的2kb
                    contentlen = fs.Read(buff, 0, bufflength);
                    //流内容没有结束
                    while (contentlen != 0)
                    {
                        strm.Write(buff, 0, contentlen);
                        contentlen = fs.Read(buff, 0, bufflength);
                    }
                    strm.Close();
                    fs.Close();
                    this.Page.RegisterStartupScript("", "<script>$('#succeed').show();</script>");
                }
                catch (Exception ex)
                {
                    Response.Write("upload error" + ex.Message);
                }

            }
        }

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        string a = aa.Value;
        a = a.Replace("fakepath", "data_dir");
        a = a.Replace("C:", "D:");
        //UpLoad("D:\\data_dir\\" + a);
     //   this.Page.RegisterStartupScript("", "<script>alert('"+a+"')</script>");
        UpLoad(a);
    }
}