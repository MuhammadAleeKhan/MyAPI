app.post("/addride", (req, res) => {
  let emp = req.body;
  var sql =
    "INSERT INTO rides(userid,userregistcarid,startlat,startlng,endlat,endlng,Starting_address,End_adrress) VALUES(?,?,?,?,?,?,?,?);";
  mysqlconnec.query(
    sql,
    [
      emp.userid,
      emp.userregistcarid,
      emp.startlat,
      emp.startlng,
      emp.endlat,
      emp.endlng,
      emp.Starting_address,
      emp.End_adrress
    ],
    (err, row, fields) => {
      if (!err) {
        res.send(row);
      } else {
        console.log(err);
      }
    }
  );
});
