import React from 'react';
import '../../../../css/MemberService/TermsContent.css'


export const TermsContent = () => {
  return (
    <div>
      <h1 style={{textAlign:'center', marginBottom:'60px'}}>소모임 크라우드 펀딩 사이트 이용약관</h1>
      <h2 className='termsContentH2'>제1조 (목적)</h2>
      <p style={{marginBottom:'35px'}}>이 약관은 소모임 크라우드 펀딩 사이트(이하 "사이트"라 합니다)에서 제공하는 서비스의 이용조건 및 절차, 이용자와 회사 간의 권리, 의무, 책임사항 등을 규정함을 목적으로 합니다.</p>

      <h2 className='termsContentH2'>제2조 (약관의 효력과 변경)</h2>
      <ol className='termsContentOl'>
        <li className='termsContentLi'>이 약관은 이용자에게 공시함으로써 효력을 발생합니다.</li>
        <li className='termsContentLi'>회사는 사정 변경의 경우와 영업상 중요 사유가 있을 때 약관을 변경할 수 있으며, 변경된 약관은 전항과 같은 방법으로 공지 또는 통지합니다.</li>
        <li className='termsContentLi'>이용자는 변경된 약관에 동의하지 않을 경우, 서비스 이용을 중단할 수 있습니다.</li>
      </ol>

      <h2 className='termsContentH2'>제3조 (이용자의 가입)</h2>
      <ol className='termsContentOl'>
        <li className='termsContentLi'>이용자는 회사가 정한 가입 양식에 따라 회원으로 가입할 수 있습니다.</li>
        <li className='termsContentLi'>이용자는 가입 시 반드시 본인의 정확한 정보를 입력해야 하며, 허위 또는 타인의 정보를 입력할 경우 서비스 이용이 제한될 수 있습니다.</li>
        <li className='termsContentLi'>회사는 이용자의 가입 신청이 다음 각 호의 하나에 해당하는 경우 승낙을 거절할 수 있습니다.</li>
        <ul style={{listStyleType: 'none'}}>
          <li className='termsContentLi'>1) 타인의 명의를 도용하여 신청한 경우</li>
          <li className='termsContentLi'>2) 이용자의 귀책사유로 인해 승인이 불가능하거나 기타 규정한 사항을 위반하여 신청한 경우</li>
          <li className='termsContentLi'>3) 사회의 안녕과 질서, 미풍양속을 저해할 목적으로 신청한 경우</li>
          <li className='termsContentLi'>4) 기타 규정한 사항을 위반하여 신청한 경우</li>
        </ul>
      </ol>

      <h2 className='termsContentH2'>제4조 (서비스 이용)</h2>
      <ol className='termsContentOl'>
        <li className='termsContentLi'>이용자는 회사가 제공하는 서비스를 이용할 수 있습니다.</li>
        <li className='termsContentLi'>이용자는 서비스 이용 시 다음 각 호의 행위를 해서는 안 됩니다.</li>
        <ul style={{listStyleType: 'none'}}>
        <li className='termsContentLi'>1) 다른 이용자의 서비스 이용을 방해하거나 그 정보를 도용하는 행위</li>
        <li className='termsContentLi'>2) 회사의 동의 없이 영리목적의 광고를 게시하거나 상품 등을 소개하는 행위</li>
        <li className='termsContentLi'>3) 욕설, 비속어 등을 사용하여 다른 이용자에게 불쾌감을 주는 행위</li>
        <li className='termsContentLi'>4) 다른 이용자를 희롱, 협박하거나 음해하는 행위</li>
        <li className='termsContentLi'>5) 회사의 명예나 신용을 훼손하는 행위</li>
        <li className='termsContentLi'>6) 회사가 규정한 사항을 위반하는 행위</li>
        </ul>
      </ol>

      <h2 className='termsContentH2'>제5조 (펀딩 참여자의 권리와 의무)</h2>
      <ol className='termsContentOl'>
        <li className='termsContentLi'>펀딩 참여자는 프로젝트에 대한 정보를 제공받을 권리가 있습니다.</li>
        <li className='termsContentLi'>펀딩 참여자는 펀딩 금액에 대한 상환 권리를 가집니다.</li>
        <li className='termsContentLi'>펀딩 참여자는 프로젝트의 성공을 위해 적극적으로 참여해야 합니다.</li>
        <li className='termsContentLi'>프로젝트 실패 시 펀딩 참여자에게 환불을 보장하지 않을 수 있습니다.</li>
      </ol>
          <h2 className='termsContentH2'>제6조 (프로젝트 개설자의 권리와 의무)</h2>
      <ol className='termsContentOl'>
        <li className='termsContentLi'>프로젝트 개설자는 프로젝트에 대한 책임을 가집니다.</li>
        <li className='termsContentLi'>프로젝트 개설자는 펀딩 참여자들에게 정확하고 투명한 정보를 제공해야 합니다.</li>
        <li className='termsContentLi'>프로젝트 진행 중 발생하는 문제에 대해 적극적으로 대처해야 합니다.</li>
        <li className='termsContentLi'>펀딩 금액의 사용 내역을 공개해야 합니다.</li>
      </ol>

      <h2 className='termsContentH2'>제7조 (약관 위반 시 조치)</h2>
      <ol className='termsContentOl'>
        <li className='termsContentLi'>약관을 위반하는 경우, 펀딩 참여자와 프로젝트 개설자 모두에게 제재가 가해질 수 있습니다.</li>
        <li className='termsContentLi'>제재 조치에 대한 상세한 내용은 사이트 내 공지사항을 통해 안내됩니다.</li>
      </ol>

      <h2 className='termsContentH2'>제8조 (약관 변경 및 해지)</h2>
      <ol className='termsContentOl'>
        <li className='termsContentLi'>회사는 사정 변경의 경우와 영업상 중요 사유가 있을 때 약관을 변경할 수 있으며, 변경된 약관은 전항과 같은 방법으로 공지 또는 통지합니다.</li>
        <li className='termsContentLi'>이용자는 변경된 약관에 동의하지 않을 경우, 서비스 이용을 중단할 수 있습니다.</li>
      </ol>

      <h2 className='termsContentH2'>제9조 (개인정보 보호)</h2>
      <ol className='termsContentOl'>
        <li className='termsContentLi'>회사는 이용자의 개인정보를 보호하기 위해 노력합니다.</li>
        <li className='termsContentLi'>이용자는 개인정보 보호를 위해 스스로 주의를 기울여야 하며, 회사가 제공하는 개인정보 보호 정책을 숙지해야 합니다.</li>
        <li className='termsContentLi'>회사는 이용자의 개인정보를 제3자에게 제공하거나 위탁할 수 있습니다. 이 경우, 이용자의 동의를 받아야 하며, 관련 법률을 준수해야 합니다.</li>
      </ol>

      <h2 className='termsContentH2'>제10조 (분쟁해결)</h2>
      <ol className='termsContentOl'>
        <li className='termsContentLi'>회사는 이용자와 발생한 분쟁에 대해 공정하고 신속하게 처리합니다.</li>
        <li className='termsContentLi'>이용자는 회사에 분쟁해결을 요청할 수 있으며, 회사는 이에 대해 적극적으로 대응합니다.</li>
        <li className='termsContentLi'>회사는 이용자와 분쟁이 해결되지 않을 경우, 관련 법령에 따라 분쟁을 해결합니다.</li>
      </ol>
    </div>
  )
}