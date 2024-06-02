<%@ page import ="java.sql.*" %>
<%@ page import ="javax.sql.*" %>
<%
String fname = request.getParameter("email");
String pwd = request.getParameter("pwd");


Class.forName("com.mysql.jdbc.Driver");
java.sql.Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3307/phase2", "root", "");
Statement st=con.createStatement();
String sql ="select PASSWORD from users where EMAIL=fname";
ResultSet rs= st.executeQuery(sql);
int i = 0;

if (rs.equals(pwd)) {

        response.sendRedirect("../dashboard/Dashboard.html"); // Redirect to success.jsp page
} 
%>
