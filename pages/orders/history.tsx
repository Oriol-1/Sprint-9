import { ShopLayout } from "@/components/layouts"
import { Button, Chip, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueFormatterParams } from "@mui/x-data-grid";
import NextLink from 'next/link';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },

    { field: 'paid', headerName: 'Pagado',description:'Muestra si esta pagado' , width: 200,
    renderCell: (params:GridRenderCellParams) => {
        return (
            params.row.paid
            ? <Chip color = "success" label= "Pagada" variant= 'outlined'/>
            : <Chip color = "error" label= "No pagado" variant= 'outlined' />
        )
    }

    },

    { field: 'actions', headerName: 'Acciones', width: 200, sortable: false, 
    
    renderCell: (params:GridRenderCellParams) => {
        return (
         <NextLink href={`/orders/${params.row.id }`} passHref >
               <Button sx={
                {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                    },
                }
            
         }>
                ver
                </Button> 
         </NextLink>
        )
    }
    },

  

  



];

const rows =[
    {id:1, paid: true, fullname:'Oriol Alonso'},
    {id:2, paid: false, fullname:'Daniel Alonso'},
    {id:3, paid: true, fullname:'toni Marques '},
    {id:4, paid: false, fullname:'Sebastian Abellan'},
    {id:5, paid: true, fullname:'Sandra Alegria'},
    {id:6, paid: false, fullname:'Veronica Llorden '},
  
  
]

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de pedidos'} pageDescription={'Historial pedidos cliente'}>
        <Typography variant="h1" component='h1'> Historial de pedidos </Typography>

    <Grid container>
        <Grid item xs={12} sx={{height:650, width: '100%' }}>
            <DataGrid 
            rows={rows}
            columns={columns}
            initialState={{
                pagination: { 
                  paginationModel: { pageSize: 5 } 
                },
              }}
              pageSizeOptions={[5, 10, 25]}


            // pageSize={10}
            // rowsPerPageOptions={[10]}
            />

        </Grid>
          
    </Grid>
    </ShopLayout>
  )
}

export default HistoryPage