import React, { useEffect, useState } from 'react';
import './FilterHeader.scss';

interface FHProps {
  setTabState: any;
  filters: string[];
  subFilters?: any;
}

function FilterHeader({ filters, subFilters, setTabState }: FHProps) {
  const [activeTab, setActiveTab] = useState({ filter: filters[0], index: 0 });
  const [activeSubTab, setActiveSubTab] = useState({ filter: subFilters[0]?.headers[0], index: 0 });

  useEffect(() => {
    setTabState({ main: activeTab.filter, sub: activeSubTab.filter });
  }, [activeTab, activeSubTab, setTabState]);

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
              onClick={() => {setActiveTab({ filter, index }); if(subFilters[index]) setActiveSubTab({ filter: subFilters[index].headers[0], index: 0 })}}
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
    </div>
  )
}

export default FilterHeader