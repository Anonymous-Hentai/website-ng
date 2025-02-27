import React from 'react'
import { PartnersSectionConfig } from '../../../config/PageIndexConfig/PartnersSectionConfig'
import SectionHeader from '../../SectionHeader'
import styles from './index.module.scss'
import PartnerRow from './PartnerRow'
import classnames from 'classnames'
import { useBreakpoint } from '../../../hooks/useBreakpoint'

type Props = {
  noHeader?: boolean
}

const PartnersSection: React.FC<Props> = (props) => {
  const { noHeader = false } = props
  const { breakpoint } = useBreakpoint()

  return (
    <div className={styles.partnersSection}>
      <div className='container'>
        <div className={classnames([styles.content, 'row'])}>
          {breakpoint === 'desktop' && (
            <div className={styles.partners}>
              <PartnerRow from={0} to={2}></PartnerRow>
              <PartnerRow from={3} to={7}></PartnerRow>
              <PartnerRow from={8} to={12}></PartnerRow>
              <PartnerRow from={13} to={13}></PartnerRow>
            </div>
          )}

          {breakpoint === 'tablet' && (
            <div className={styles.partners}>
              <SectionHeader
                className={classnames([styles.mobileHeader])}
                title={PartnersSectionConfig.title}
              />

              <PartnerRow from={0} to={13}></PartnerRow>
            </div>
          )}

          {breakpoint === 'mobile' && (
            <div className={styles.partners}>
              {!noHeader && (
                <SectionHeader
                  className={classnames([styles.mobileHeader])}
                  title={PartnersSectionConfig.title}
                />
              )}

              <PartnerRow from={0} to={1}></PartnerRow>
              <PartnerRow from={2} to={3}></PartnerRow>
              <PartnerRow from={4} to={6}></PartnerRow>
              <PartnerRow from={7} to={8}></PartnerRow>
              <PartnerRow from={9} to={10}></PartnerRow>
              <PartnerRow from={11} to={12}></PartnerRow>
              <PartnerRow from={13} to={13}></PartnerRow>
            </div>
          )}

          {!noHeader && (
            <SectionHeader
              className={classnames([styles.header])}
              title={PartnersSectionConfig.title}
              description={PartnersSectionConfig.description}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
