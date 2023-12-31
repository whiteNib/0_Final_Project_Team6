import React, { useState } from 'react';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAddr } from '../../../../redux/reducer/userAddrActions';
import '../../../../css/MemberService/AddressSearch.css';
import { setProjPlaceAddr } from '../../../../redux/reducer/projPlaceAddrAction'

function AddressSearch({ userProfileUserAddr, CallClassName, defaultValue }) {
  const dispatch = useDispatch();
  let userAddr = useSelector((state)=>state.userAddr.userAddr);
  if(userProfileUserAddr !== undefined){
    userAddr = userProfileUserAddr
  }
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userAddress, setUserAddress] = useState(userAddr);
  const [projAddress, setProjAddress] = useState();
  const [detailedAddress, setDetailedAddress] = useState(''); // 상세 주소 입력
  const [showDetailedAddress, setShowDetailedAddress] = useState(false)

  const handleAddressComplete = (data) => {
    let fullAddress = data.address; //기본주소 정보 
    let extraAddress = ''; //추가주소 정보

    if (data.addressType === 'R') { // 도로명 주소만 가능
      if (data.bname !== '') { // 법정동명
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') { // 건물명
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''; // 기본주소 + 추가주소
      setUserAddress(fullAddress);
      setShowDetailedAddress(true);
    }
    
  };

  const saveDetailedAddress = () => {
    const userAddressResult = userAddress + '  ' + detailedAddress
    if(CallClassName === 'createProjButtonShort'){
      setProjAddress(userAddressResult)
      dispatch(setProjPlaceAddr({ projPlace: detailedAddress, projAddr: userAddress }));
      setDetailedAddress('');
      setModalIsOpen(false);
      setShowDetailedAddress(false);
    } else {
      setUserAddress(userAddressResult)
      dispatch(setUserAddr(userAddressResult));
      setDetailedAddress('');
      setModalIsOpen(false);
      setShowDetailedAddress(false);
    }
  };

  return (
    <div>
      <div style={{display:'flex', alignItems:'center'}}>
      {CallClassName === 'createProjButtonShort' ? defaultValue === undefined ? (<input style={{height:'36px'}} className='createProjAddressSearchInputShort' type='text' value={projAddress} placeholder='주소' readOnly required></input>) : (<input style={{height:'36px'}} className='createProjAddressSearchInputShort' type='text' value={defaultValue} placeholder='주소' readOnly required></input>) : (<input style={{height:'36px',border:'1px solid var(--Darkgray)'}} className='AddressSearchInputShort' type='text' value={userAddress} placeholder='주소' readOnly required></input>)}
      <button id={`${
        CallClassName === 'createProjButtonShort'
          ? 'createProjButtonShort'
          : 'AddressSearchButtonShort'
      }`} onClick={(evt) => {evt.preventDefault(); setModalIsOpen(true)}}>주소검색</button>
      </div>
      {/* 모달 다이얼로그 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {setModalIsOpen(false); setShowDetailedAddress(false);}}
        contentLabel="주소 검색"
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        style={{
          content: {
            width: '50%',
            height: '50%',
            overflow: 'hidden',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
          },
        }}
      >
        <button style={{ marginLeft: 'auto', display: 'block' }} onClick={() => {setModalIsOpen(false); setShowDetailedAddress(false); setDetailedAddress('');}}>X</button>
        <DaumPostcode
          onComplete={handleAddressComplete}
          autoClose
          animation
          autoMapping
          style={{ width: '100%', height: 'calc(100% - 50px)' }}
        />
        <div style={{display:'flex', alignItems:'center'}}>
        {/* 상세 주소 입력 필드 */}
        {showDetailedAddress && (
              <input className='AddressSearchInputShort'
                type="text"
                placeholder="상세주소를 입력하세요"
                value={detailedAddress}
                onChange={(e) => setDetailedAddress(e.target.value)}
              />
            )}
        {/* 상세 주소 저장 버튼 */}
        {showDetailedAddress && (
          <button id='AddressSearchButtonShort' style={{height:'46.67px'}} onClick={saveDetailedAddress}>상세주소 저장</button>
        )}
        </div>
      </Modal>
    </div>
  );
}

export default AddressSearch;