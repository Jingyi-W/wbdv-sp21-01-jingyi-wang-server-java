package com.example.wbdvsp2101jingyiwangserverjava.repositories;

import com.example.wbdvsp2101jingyiwangserverjava.models.Widget;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface WidgetRepository extends CrudRepository<Widget, Long> {

  @Query(value="SELECT * FROM widgets WHERE topic_id=:tid", nativeQuery = true)
  public List<Widget> findWidgetsFoTopic(@Param("tid")String tid);


}
