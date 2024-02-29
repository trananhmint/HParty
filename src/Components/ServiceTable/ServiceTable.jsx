import  React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import './ServiceTable.css'
import { fetchService } from '../../Context/fetchService';

// function createData(ServiceId, ServiceName, Price, Description, Status, UserId, CategoryId, ServiceTitle) {
//   return { ServiceId, ServiceName, Price, Description, Status, UserId, CategoryId, ServiceTitle };
// }

// const rows = [
//   createData(1, 'Dịch vụ cung cấp người phục vụ (Cty Hoàng An)',2000000, 'Số lượng: 20 -40 người Dịch vụ của chúng tôi cung cấp người phục vụ cho tiệc sinh nhật với một đội ngũ lớn và đa dạng.Với một đội ngũ đông đảo như vậy, chúng tôi có thể đảm bảo rằng mọi khía cạnh của buổi tiệc đều được quản lý một cách chuyên nghiệp và hiệu quả. Từ việc phục vụ thức ăn và đồ uống cho việc hỗ trợ trong việc tổ chức chương trình giải trí, đội ngũ của chúng tôi sẽ đảm bảo rằng buổi tiệc của bạn diễn ra suôn sẻ và thành công.', 1, 55, 3, ''),
//   createData(2, 'Dịch vụ cung cấp người phục vụ (Cty Hải Dương)', 1800000, 'Số lượng: 20-40 người. Chúng tôi không chỉ đơn thuần cung cấp dịch vụ phục vụ, mà còn cam kết đem đến trải nghiệm tuyệt vời nhất cho buổi tiệc sinh nhật của bạn. Với sự chuyên nghiệp và tận tâm, đội ngũ của chúng tôi sẽ tạo ra không gian đầy ấn tượng và đáng nhớ, giúp buổi tiệc của bạn trở nên đặc biệt và hoàn hảo hơn bao giờ hết.', 0, 57, 3, ''),
//   createData(3, 'Combo Vui Vẻ - 20 bé', 2000000, 'Combo đồ ăn thức uống cho tiệc sinh nhật của bé là sự kết hợp hoàn hảo giữa các món ăn ngon và đồ uống phổ biến, được thiết kế đặc biệt cho tiệc sinh nhật với quy mô khoảng 20 khách. Chi tiết combo bao gồm: 20 phần gà chiên giòn 20 ổ pizza tươi ngon 20 bát mì Ý tươi ngon 20 lon Coca-Cola lạnh mát Với những món ăn và đồ uống đa dạng và phong phú trong combo này, bạn sẽ dễ dàng tổ chức một buổi tiệc sinh nhật vui vẻ và đầy đủ cho bé mà không cần phải lo lắng về việc chuẩn bị hay nấu nướng. Hãy để chúng tôi giúp bạn tạo ra những khoảnh khắc đáng nhớ cho buổi tiệc sinh nhật của bé!', 1, 64, 2, ''),
//   createData(4, 'Combo Phong Phú - 30 bé', 2200000, 'Combo đồ ăn thức uống cho tiệc sinh nhật của bé là sự kết hợp hoàn hảo giữa các món ăn ngon và đồ uống phổ biến, được thiết kế đặc biệt cho tiệc sinh nhật với quy mô khoảng 30 khách. Chi tiết combo bao gồm: 30 phần gà nướng thơm phức 10 ổ pizza hấp dẫn 30 bát mì Ý đậm đà 30 ly trà sữa chocolate full topping Với những món ăn và đồ uống đa dạng và phong phú trong combo này, bạn sẽ dễ dàng tổ chức một buổi tiệc sinh nhật vui vẻ và đầy đủ cho bé mà không cần phải lo lắng về việc chuẩn bị hay nấu nướng. Hãy để chúng tôi giúp bạn tạo ra những khoảnh khắc đáng nhớ cho buổi tiệc sinh nhật của bé!', 0, 63, 2, ''),
//   createData(5, 'Background tiệc sinh nhật', 500000, 'Dịch vụ làm background trang trí tiệc sinh nhật cho bé mang đến không gian thú vị và phấn khích cho buổi tiệc. Với các mẫu background đa dạng và sáng tạo, chúng tôi tạo ra các bối cảnh đặc biệt, từ các chủ đề hoạt hình yêu thích cho đến các khung cảnh phong phú với màu sắc và hình ảnh tươi sáng. Dịch vụ của chúng tôi không chỉ tạo điểm nhấn thú vị cho không gian tiệc mà còn giúp tạo ra không khí lễ hội và ấn tượng cho bé và khách mời. Hãy để chúng tôi tạo nên một background độc đáo và đáng nhớ cho buổi tiệc sinh nhật của bé!', 1, 55, 1, '')
// ];


export default function ServiceTable() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
      try {
          const data = await fetchService();
          setItems(data.data.data);
          console.log(data.data.data);
      } catch (err) {
          console.log(err);
      }

  }
  useEffect(() => {
      fetchData();
  }, []);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead className='table-header'>
          <TableRow >
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} >ID</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Service Name</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Price</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Description</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">UserID</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">CategoryID</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Status</TableCell>
            <TableCell sx={{fontSize:'18px', fontWeight:'550',color:'white'}} align="center">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.serviceId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.serviceId}
              </TableCell>
              <TableCell sx={{fontSize:'16px'}}>{item.serviceName}</TableCell>
              <TableCell sx={{fontSize:'16px'}}>{item.price}</TableCell>
              <TableCell sx={{fontSize:'16px'}}>{item.description}</TableCell>
              <TableCell sx={{fontSize:'16px'}}>{item.userId}</TableCell>
              <TableCell sx={{fontSize:'16px'}} align="center">
                {item.categoryId === 1 ? 'Decoration' : item.categoryId === 2 ? 'Food & Drinks' : item.categoryId === 3 ? 'Waiter' : ''}
              </TableCell>
              <TableCell sx={{ fontSize: '16px'}} align="center">
              <Button
                variant="contained"
                style={{
                    backgroundColor: item.status === 1 ? '#32CD32' : '#FF4500',
                    borderRadius: '20px',}}>
                    {item.status === 1 ? 'ACTIVE': 'NON_ACTIVE'}
             </Button>
              </TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={1} alignItems={'center'} justifyContent={'space-around'}>
                    <Button variant="contained" endIcon={<EditIcon/>} style={{background:'#f5a02c'}}>
                        Edit
                    </Button>

                    <Button variant="outlined" startIcon={<DeleteIcon />} style={{borderColor:'#f5a02c', color:'#f5a02c'}}>
                        Delete
                    </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}