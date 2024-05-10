import React, { useEffect, useState } from 'react';
import './FilterHeader.scss';

interface FHProps {
  setTabState: any;
  filters: string[];
  subFilters?: any;
  secondarySubFilters?: any;
}

function FilterHeader({ filters, subFilters, setTabState, secondarySubFilters }: FHProps) {
  const [activeTab, setActiveTab] = useState({ filter: filters[0], index: 0 });
  const [activeSubTab, setActiveSubTab] = useState({ filter: subFilters[0]?.headers[0], index: 0 });
  const [activeSecondarySubTab, setActiveSecondarySubTab] = useState(secondarySubFilters ? { filter: secondarySubFilters[0]?.headers[0], index: 0 } : null);

  useEffect(() => {
    setTabState({ main: activeTab.filter, sub: activeSubTab.filter, secondarySub: activeSecondarySubTab ? activeSecondarySubTab.filter : undefined });
  }, [activeTab, activeSubTab, setTabState, activeSecondarySubTab]);

  const tabInStyle = {
    width: `calc((100% / ${filters.length}) - 0.5rem)`,
    height: `calc(100% - 1rem)`,
    transform: `${`translateX(calc((100% * ${activeTab.index}) + 0.25rem))`
      }`,
  }

  return (
    <div className='filterHeaderComponent'>
      <span className='filterWrapper'>
        {filters.map((filter, index) => {
          return (
            <button
              key={`filter-${filter}-${Math.random}`}
              className={`filterButton`}
              onClick={() => { setActiveTab({ filter, index }); if (subFilters[index]) setActiveSubTab({ filter: subFilters[index].headers[0], index: 0 }) }}
            >
              {filter}
            </button>
          );
        })}
        <span className="tabIndicator" style={tabInStyle}></span>
      </span>


      {subFilters.map((subFilter: any, index: number) => {
        const subTabInStyle = {
          width: `calc((100% / ${subFilter.headers.length}) - 0.5rem)`,
          height: `calc(100% - 1rem)`,
          transform: `${`translateX(calc((100% * ${activeSubTab.index}) + 0.25rem))`
            }`,
        }

        return (
          <span
            className={`subFilterWrapper ${activeTab.filter === subFilter.parent ? 'active' : ''}`}
            key={`subFilter-${index}`}
          >
            {subFilter.headers.map((filter: any, index: number) => {
              return (
                <button
                  key={`filter-${filter}-${Math.random}`}
                  className={`filterButton`}
                  onClick={() => setActiveSubTab({ filter, index })}
                >
                  {filter}
                </button>
              );
            })}
            <span className="tabIndicator" style={subTabInStyle}></span>
          </span>
        )
      })}


      {secondarySubFilters && activeSecondarySubTab && secondarySubFilters.map((subFilter: any, index: number) => {
        const subTabInStyle = {
          width: `calc((100% / ${subFilter.headers.length}) - 0.5rem)`,
          height: `calc(100% - 1rem)`,
          transform: `${`translateX(calc((100% * ${activeSecondarySubTab.index}) + 0.25rem))`
            }`,
        }

        return (
          <span
            className={`subFilterWrapper secondary ${activeTab.filter === subFilter.parent ? 'active' : ''}`}
            key={`secondarySubFilter-${index}`}
          >
            {subFilter.headers.map((filter: any, index: number) => {
              return (
                <button
                  key={`filter-${filter}-${Math.random}`}
                  className={`filterButton`}
                  onClick={() => setActiveSecondarySubTab({ filter, index })}
                >
                  {filter}
                </button>
              );
            })}
            <span className="tabIndicator" style={subTabInStyle}></span>
          </span>
        )
      })}
    </div>
  )
}

export default FilterHeader