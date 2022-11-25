import React, { useState } from 'react'
import WarehouseDetails from '../components/warehouse-details/WarehouseDetails'
import Title from '../components/title/Title'
import DeleteModal from './delete-modal/DeleteModal'

const WarehousesPage = () => {
  // const [delOpen, setDelOpen] = useState(false)
  const [delOpen, setDelOpen] = useState(true)
  let activeTable = 'Warehouses'

  return (
    <>
      {delOpen && <DeleteModal setDelOpen={setDelOpen} />}
      <Title activeTable={activeTable} />
      <WarehouseDetails />
    </>
  )
}

export default WarehousesPage
